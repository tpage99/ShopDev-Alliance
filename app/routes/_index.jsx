/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'ShopDev Alliance'}];
};

export default function Homepage() {
  /** @type {LoaderReturnData} */
  return (
    <div className="home">
      <h1>Shopify Developer Freelance Community</h1>
      <p>Battling a constantly evolving world in web development, scope creep, and building a business can get lonely.</p>
      <h2><em>You may be building solo, but you don't have to do it alone.</em></h2>
      <p>That's why we formed the ShopDev Alliance. A paid Slack community to learn and grow with other freelancers operating in the same space.</p>
      <h2>We're not each other's competition, we're part of the <em>Alliance</em>.</h2>
      <h3>But why a <em>paid</em> Slack community?</h3>
      <p>There are already loads of great free Slack and Discord communities out there. Spam and someone trying to sell you their Saas or join their partner program is rampant. A paid community allows us to take advantage of an ongoing record to reference for later and ensures we can provide moderation within our community.</p>
      <h3>What all is included?</h3>
      <p>Your paid membership to the ShopDev Alliance gives you:</p>
      <ul>
          <li>Pro Slack membership so we can maintain a history of great content</li>
          <li>Moderators who enforce a code of conduct</li>
          <li>Once a month webinar for freelance topics</li>
          <li>High-qualty engagement from other successful freelancers</li>
          <li>A community full of members who can directly relate to you</li>
        </ul>
      <h2>Pricing</h2>
      <p>Membership to the ShopDev Alliance is $25/month or $250/year (2 months free 🚀)</p>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
