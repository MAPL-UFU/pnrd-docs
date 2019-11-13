
const PropTypes = require('prop-types');
const React = require('react');
const CookieBanner = require(`${process.cwd()}/core/CookieBanner`);

function SocialFooter(props) {
  const projectName = 'MAPL';
  const repoUrl = `https://github.com/${props.config.organizationName}/${
    projectName
  }`;
  const baseUrl = props.config.baseUrl;

  return (
    <div className="footerSection">
      <h5>Social</h5>
      <div className="social">
        <a
          className="github-button" // part of the https://buttons.github.io/buttons.js script in siteConfig.js
          href={repoUrl}
          data-count-href={`${repoUrl}/stargazers`}
          data-show-count="true"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star MAPL on GitHub">
          {projectName}
        </a>
      </div>
    </div>
  );
}

SocialFooter.propTypes = {
  config: PropTypes.object,
};

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          {this.props.config.footerIcon && (
            <a href={this.props.config.baseUrl} className="nav-home">
              <img
                src={`${this.props.config.baseUrl}${
                  this.props.config.footerIcon
                }`}
                alt={this.props.config.title}
              />
            </a>
          )}
          <div className="footerSection">
            <h5>Learn About PNRD</h5>
            <a href={this.docUrl('welcome-to-pnrd')}>Welcome to PNRD</a>
            <a href={this.docUrl('petri-net')}>Key Concepts of the Petri Network</a>
            <a href={this.docUrl('pnrd-arduino')}>Getting Started With PNRD</a>
            <p />
          </div>
          <div className="footerSection">
            <h5>PNRD Core </h5>
            <a href={this.docUrl('reference/pnrd-core-arduino')}>PNRD Arduino Core Concepts</a>
          </div>
          <div className="footerSection">
            <h5>University</h5>
            <a href="http://www.mecanica.ufu.br/">Faculdade de Engenharia Mecânica</a>
            <a href="http://www.ufu.br/">Universidade Federal de Uberlândia</a>
          </div>
        </section>
        <section className="copyright">
          {this.props.config.copyright && (
            <span>{this.props.config.copyright}</span>
          )}{' '}
          &copy; MAPL-FEMEC-UFU
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
