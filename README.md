# cms-entry-site

Deployed [here](https://gray-sand-0dd73691e.2.azurestaticapps.net/)

The CMS that can be accessed via GitLab auth at the `/admin/` endpoint is linked to a separate repo, [here](https://gitlab.com/devon-wolf/portal-data-model), which can have some of its contents edited via the GUI. There is no live site where these changes are reflected - to follow the model of the app this is intended for, the `.yml` files in the target repository would be transformed to JSON and stored in a database for the frontend to use in its builds.

This is a quick proof of concept and remains incomplete; check out the stuff still to be done!

# TODO
- Actually work with multiple solutions within the target directory
- Determine how to work with nested media folders - possible?
- Document the collection config
- Determine what fields are required, set others to not
- Determine if some of the fields have a set of possible options (select widget)
- Set lists to be add-to-able
- Set solutions and partners to be add-to-able

## Resources

This site is a radically scaled-back and customized version of the [Gastsby Starter Netlify CMS template](https://github.com/netlify-templates/gatsby-starter-netlify-cms/). All the old docs included with that template can be found in [`docs/old`](./docs/old). I chose to use the Gatsby template since our main app frontend is built with Gatsby, but this implementation could actually be as simple as one static HTML file that calls the CMS script.

Netlify CMS documentation in general can be found [here](https://www.netlifycms.org/docs/intro/), and covers a wide range of use cases and configurations. This site is using a GitLab backend, with a user's GitLab credentials determining whether they can make edits to the target repository. Documentation for this auth setup is [here](https://www.netlifycms.org/docs/gitlab-backend/#client-side-pkce-authorization), and GitLab's docs for adding the application are [here](https://docs.gitlab.com/ee/integration/oauth_provider.html#adding-an-application-through-the-profile).

This site was deployed from GitHub to Azure following Microsoft's guide [here](https://learn.microsoft.com/en-us/azure/static-web-apps/publish-gatsby#deploy-your-web-app).
