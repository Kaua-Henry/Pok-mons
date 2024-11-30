import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: async (req, res) => {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          prompt: "login",
        },
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
});
