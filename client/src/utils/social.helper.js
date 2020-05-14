export const handleGoogleLogin = (location) => {
  const { pathname, search, state, key } = location;
  console.log('location obj is', location.pathname);
  console.log('location.search is', location.search);
  console.log('location.state is ', location.state);
  console.log('location key is', location.key);
  //const { from } = location.state || { from: { pathname: '/' } };
  //console.log('from is', from);
  // const pathname = from.pathname;
  console.log('pathname is ', pathname);
  localStorage.setItem(
    'redirectUrl',
    JSON.stringify({ pathname, search, state, key })
  );
  window.open(process.env.REACT_APP_BASE_URL + 'auth/google', '_self');
};
