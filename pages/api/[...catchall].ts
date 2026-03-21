import handler from '../../api/index';
// Reenvía todas las peticiones a nuestra función serverless existente
export default handler;
export const config = {
  api: {
    bodyParser: true,
  },
};
