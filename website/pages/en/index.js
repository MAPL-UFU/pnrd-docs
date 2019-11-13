
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const bash = (...args) => `~~~bash\n${String.raw(...args)}\n~~~`;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="splashLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <Logo img_src={baseUrl + 'img/MAPL.png'} />
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('welcome-to-pnrd')}>Visite the PNRD Documentation</Button>
            <Button href={docUrl('pnrd-ipnrd-in-block-world-domain')}>PNRD Technical Paper</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/MAPL.png`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );
    // getStartedSection
    const pre = '```';
    // Example for connecting to test network
    const exampleConnectToNetwork = `${pre}rust
    `;
    // Example for creating a wallet
    const exampleCreateWallet = `${pre}rust
    `;
    // Example for sending currency
    const exampleSendingCurrency = `${pre}rust
    `;
    //
    const QuickStart = () => (
      <div
        className="productShowcaseSection"
        id="quickstart"
        style={{textAlign: 'center', marginBottom:'30px'}}>
        <h2>Try Start using PNRD with Arduino</h2>
        <p>Currently available for any Arduino Boards</p>
        <Container>
          <h4>1. Clone PNRD Libraries:</h4>
          <div style={{marginLeft:"30px"}}>
            <MarkdownBlock>{
bash`git clone https://github.com/MAPL-UFU/PNRD-arduino-library && cd PNRD-arduino-library`}</MarkdownBlock>
          </div>
          <h4>2.Move the Libraries for Arduino libs directory:</h4>
          <div style={{marginLeft:"30px"}}>
            <MarkdownBlock>{bash`mv -t <arduino>/libs PN532 PetriNet Pn532NfcReader Pnrd `}</MarkdownBlock>
          </div>
          <h4>3. Clone our exemple for Cellular Manufacturing:</h4>
          <div style={{marginLeft:"30px"}}>
            <MarkdownBlock>{bash`git clone https://github.com/MAPL-UFU/pnrd-cell-manufacturing && cd pnrd-cell-manufacturing`}</MarkdownBlock>
          </div>
            <h4>4.Run Your First PNRD Project deployed with Arduino</h4>
          <div style={{marginLeft:"30px"}}>
            <MarkdownBlock>{bash`./scripts/cli/start_cli_testnet.sh`}</MarkdownBlock>
          </div>
            <h4>5. View our PNRD documentation:</h4>
          <div style={{marginLeft:"30px"}}>
                <Button href={'docs/pnrd-hello-world'}>PNRD Hello World</Button>
          </div>
        </Container>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="landingPage mainContainer">
          <QuickStart />
        </div>
      </div>
    );
  }
}

module.exports = Index;
