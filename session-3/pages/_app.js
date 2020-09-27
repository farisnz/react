import "../styles/globals.css";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme";
import { Provider } from "react-redux";
import store from "../redux/stores";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://kaycollection.testingnow.me/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
  );
}
export default MyApp;