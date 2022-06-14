import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			authorizationUrl:
				'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
		}),
	],
	session: {
		strategy: 'jwt',
	},
	jwt: {
		secret: 'secret token',
		encryption: true,
	},
	callbacks: {
		async jwt({ token, account, user, session }) {
			if (account?.accessToken) {
				token.accessToken = account.accessToken;
			}
			return token;
		},
		async redirect({ url, _baseUrl, user }) {
			console.log('user 2', user);
			if (url === '/dashboard') {
				return Promise.resolve('/');
			}
			return Promise.resolve('/');
		},
	},
});
