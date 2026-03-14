/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Diz ao Next.js para gerar arquivos estáticos
  images: {
    unoptimized: true, // Necessário para imagens funcionarem no export estático
  }
};

export default nextConfig;