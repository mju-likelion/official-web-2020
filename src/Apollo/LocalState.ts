export const defaults = {
  isSignedIn: Boolean(localStorage.getItem('token')) || false
};

export const resolvers = {
  Mutation: {
    signIn: (_: any, { token }: any, { cache }: any) => {
      localStorage.setItem('token', token);
      cache.writeData({
        data: {
          isSignedIn: true
        }
      });
      return null;
    },
    signOut: (_: any, __: any, { cache }: any) => {
      localStorage.removeItem('token');
      window.location.reload();
      return null;
    }
  }
};
