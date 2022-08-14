module.exports = [
  {
    source: '/login',
    destination: '/api/auth/login',
    permanent: true, // 301 == 308 || 302 == 307
  },
  {
    source: '/logout',
    destination: '/api/auth/logout',
    permanent: true, // 301 == 308 || 302 == 307
  },
];
