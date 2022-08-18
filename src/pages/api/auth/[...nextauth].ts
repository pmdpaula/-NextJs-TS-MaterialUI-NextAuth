import NextAuth from 'next-auth';
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    // eslint-disable-next-line no-unused-vars
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
