# Avisa o Bing (e outros buscadores do IndexNow) sobre paginas novas ou alteradas
# do site da Revla. Chamado pelo Publicar-Revla.bat depois do git push.
#   -Todas            avisa todos os enderecos do sitemap
#   -Urls a,b,c       avisa so os enderecos informados
param(
  [string[]]$Urls,
  [switch]$Todas
)

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$dominio = 'revlacorretora.com.br'
$chave = '0bbbb1569cd2c12d803c1118322fda2c'
$arquivoChave = "https://$dominio/$chave.txt"

# 1. Espera a Vercel publicar a versao nova (o arquivo da chave precisa estar no ar)
Write-Host ''
Write-Host 'IndexNow: aguardando a publicacao na Vercel...'
$noAr = $false
for ($i = 1; $i -le 12; $i++) {
  try {
    $r = Invoke-WebRequest -UseBasicParsing -Uri "$arquivoChave`?t=$i" -TimeoutSec 20
    if ($r.Content.Trim() -eq $chave) { $noAr = $true; break }
  } catch { }
  Start-Sleep -Seconds 20
}
if (-not $noAr) {
  Write-Host 'IndexNow: o site ainda nao publicou o arquivo da chave. Rode o aviso de novo mais tarde.'
  exit 1
}

# 2. Monta a lista de enderecos
if ($Todas) {
  [xml]$sitemap = (Invoke-WebRequest -UseBasicParsing -Uri "https://$dominio/sitemap.xml").Content
  $Urls = @($sitemap.urlset.url | ForEach-Object { $_.loc })
}
if (-not $Urls -or $Urls.Count -eq 0) {
  Write-Host 'IndexNow: nenhum endereco para avisar.'
  exit 0
}

# 3. Envia o aviso
$corpo = @{
  host        = $dominio
  key         = $chave
  keyLocation = $arquivoChave
  urlList     = @($Urls)
} | ConvertTo-Json -Depth 3

try {
  $resp = Invoke-WebRequest -UseBasicParsing -Method Post -Uri 'https://api.indexnow.org/indexnow' `
    -ContentType 'application/json; charset=utf-8' -Body ([Text.Encoding]::UTF8.GetBytes($corpo))
  Write-Host "IndexNow: aviso enviado para $($Urls.Count) enderecos (resposta $($resp.StatusCode))."
} catch {
  $codigo = $_.Exception.Response.StatusCode.value__
  Write-Host "IndexNow: o envio falhou (codigo $codigo). Me mande esta mensagem."
  exit 1
}
