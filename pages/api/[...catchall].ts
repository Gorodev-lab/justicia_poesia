import handler from '../../api/index';
// Reenvía todas las peticiones a nuestra función serverless existente
export default handler;
export const config = {
  api: {
    bodyParser: true,
    responseLimit: '8mb',
  },
};
// Extender el timeout de Vercel a 60s (máximo en plan Hobby)
export const maxDuration = 60;
