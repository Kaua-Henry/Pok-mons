import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  login: async (req: any, res: any) => {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          prompt: "login",
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
});
