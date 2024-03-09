/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer() {
  return (
    <footer className="footer">
      <FooterMenu />
    </footer>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 * }}
 */
function FooterMenu() {
  return (
    <div className="footer-menu">
      <p>ShopDev Alliance is a project of David Lindahl and Taylor Page</p>
    </div>
  );
}

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
