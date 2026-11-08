@echo off
cd /d "C:\Users\Admin\Desktop\MAQUINA DE VENDAS\Revla-Site-Github"
git pull --rebase --autostash
git add src/app/consorcios/brasileiros-no-japao/page.tsx
git add src/lib/posts.ts
git add public/images/blog/aposentadoria-imobiliaria-morando-no-japao-capa.jpg
git commit -m "Pagina do Japao: dekassegui, aposentadoria imobiliaria (secao + FAQ + novo post de blog), furikomi e novas perguntas de cauda longa"
git push
echo Aguardando a Vercel publicar (cerca de 2 minutos)...
timeout /t 120 /nobreak
echo Pronto. Avise o Claude no chat.
pause
