import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import useSizeQuery from "@src/hooks/useSizeQuery";

const Footer = () => {
  const { isDesktop } = useSizeQuery()
  return (
    <Segment
      inverted
      vertical
      style={{
        padding: "5em 0em",
        background: "#f6f6f6",
        color: "#fff"
      }}
    >
      <Container textAlign="center">
        <Grid columns={2} stackable >
          <Grid.Column className="logo_wrapper">
            <Image
              size="small"
              src="/grey_logo.svg"
              className="grey_logo"
            />
          </Grid.Column>
          <Grid.Column className="footer-links">
            <Header inverted as="h4" content="" />
            <List horizontal link size="small" style={{ marginTop: '0px' }}>
              <List.Item as="a" href="https://okfn.org/privacy-policy/" target="_blank">
                Privacy Policy
              </List.Item>
              <List.Item as="a" href="https://okfn.org/ip-policy/" target="_blank">
                IP Policy
              </List.Item>
              <List.Item as="a" href="https://okfn.org/cookie-policy/" target="_blank">
                Cookie Policy
              </List.Item>
              <List.Item as="a" href="https://okfn.org/terms-of-use/" target="_blank">
                Term of Use
              </List.Item>
              <List.Item as="a" href="https://okfn.org/about/jobs/" target="_blank">
                Jobs
              </List.Item>
              <List.Item as="a" href="https://okfn.org/contact/" target="_blank">
                Contact
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
        <Divider inverted section />
        <div style={{ textAlign: "left", fontSize: '1rem', color: 'black' }}>
          <p>
            <a href="https://github.com/school-of-data/okf-events-a" title="Site source code">
              <i class="fa fa-code fa-lg fa-fw"></i> Source code
            </a>
            &nbsp;available under the MIT license.
          </p>
          <p>
            <a class="license" rel="license" href="https://creativecommons.org/licenses/by/4.0/">
              <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.95 54.95">
                <title>cc</title>
                <path
                d="M7117.46,7140.15a26.81,26.81,0,0,1,19.63,8A26.42,26.42,0,0,1,7143,7157a29,29,0,0,1,0,21.15,25.21,25.21,0,0,1-5.86,8.71A28.23,28.23,0,0,1,7128,7193a27.35,27.35,0,0,1-10.55,2.11A26.71,26.71,0,0,1,7107,7193a28.28,28.28,0,0,1-14.94-14.94,27.44,27.44,0,0,1,0-20.93,27.57,27.57,0,0,1,6.06-9A26,26,0,0,1,7117.46,7140.15Zm0.1,5a21.29,21.29,0,0,0-15.85,6.57,23.63,23.63,0,0,0-5,7.38,21.79,21.79,0,0,0,0,17.07,23.26,23.26,0,0,0,12.29,12.22,22.29,22.29,0,0,0,17.1,0,23.7,23.7,0,0,0,7.48-5,21.11,21.11,0,0,0,6.43-15.75,22.57,22.57,0,0,0-1.67-8.64,22,22,0,0,0-4.86-7.26A21.74,21.74,0,0,0,7117.55,7145.1Zm-0.34,18-3.68,1.91a3.77,3.77,0,0,0-1.45-1.72,3.26,3.26,0,0,0-1.59-.49q-3.68,0-3.68,4.86a6,6,0,0,0,.93,3.53,3.14,3.14,0,0,0,2.75,1.33,3.44,3.44,0,0,0,3.39-2.36l3.39,1.72a8.48,8.48,0,0,1-13.15,2.06,9.76,9.76,0,0,1,0-12.51,7.77,7.77,0,0,1,5.76-2.31Q7115,7159.09,7117.21,7163.06Zm15.85,0-3.63,1.91a3.77,3.77,0,0,0-1.45-1.72,3.33,3.33,0,0,0-1.64-.49q-3.68,0-3.68,4.86a6,6,0,0,0,.93,3.53,3.14,3.14,0,0,0,2.75,1.33,3.44,3.44,0,0,0,3.39-2.36l3.43,1.72a8.44,8.44,0,0,1-3,3.16,8.63,8.63,0,0,1-10.13-1.1,9.8,9.8,0,0,1,0-12.51,7.77,7.77,0,0,1,5.77-2.31Q7130.9,7159.09,7133.06,7163.06Z"
                transform="translate(-7090.03 -7140.15)"></path>
              </svg> 
              <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.95 54.95">
                <title>by</title>
                <path
                d="M7117.46,7140.15a27.23,27.23,0,0,1,27.52,27.48,25.9,25.9,0,0,1-7.85,19.28,27.15,27.15,0,0,1-19.67,8.19,27.64,27.64,0,0,1-27.43-27.48,26.93,26.93,0,0,1,8.1-19.53A26.31,26.31,0,0,1,7117.46,7140.15Zm0.1,5a21.39,21.39,0,0,0-15.85,6.57,22.11,22.11,0,0,0-6.72,15.95,22.79,22.79,0,0,0,22.57,22.47,22.06,22.06,0,0,0,16-6.72,20.93,20.93,0,0,0,6.48-15.75A22.45,22.45,0,0,0,7117.55,7145.1Zm7.36,15.7V7172h-3.14v13.35h-8.54V7172h-3.14V7160.8a1.76,1.76,0,0,1,1.77-1.77h11.28a1.73,1.73,0,0,1,1.23.52A1.67,1.67,0,0,1,7124.91,7160.8Zm-11.24-7.07q0-3.88,3.83-3.88t3.83,3.88q0,3.83-3.83,3.83T7113.68,7153.74Z"
                transform="translate(-7090.03 -7140.15)"></path>
              </svg>
            </a>
            Content on this site, made by <a href="https://okfn.org/" property="cc:attributionName"
            rel="cc:attributionURL">Open Knowledge Foundation</a>, is licensed under a&nbsp;
            <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 International License
            </a>.
          </p>
          <p> 
            Refer to our <a href="https://okfn.org/attribution/" target="_blank">attribution page</a> for attributions of other work on the site.
          </p>
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;
