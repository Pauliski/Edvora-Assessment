import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props {
    styleTags: object;
}

export default class MyDocument extends Document<Props & DocumentInitialProps> {
    static async getInitialProps(context: DocumentContext) {
        const { renderPage } = context;
        const sheet = new ServerStyleSheet();
        const page = renderPage(
            (App) => (props) => sheet.collectStyles(<App {...props} />)
        );

        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <Html>
                <Head>
                    {this.props.styleTags}
                    <link rel="shortcut icon" href="/images/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
