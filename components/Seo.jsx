import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Moussa DIAKITE - Freelance Data Engineer, ML Engineer & ML Ops}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="As a freelance professional, Moussa DIAKITE has experience in the data engineering, machine learning engineering, and machine learning operations fields. With a successful track record of delivering projects, his portfolio is a valuable resource for showcasing his skills and previous work. Take a look to gain a better understanding of his abilities."
      />
      <meta
        name="keywords"
        content="data engineering, machine learning engineering, ML engineer, ML engineering, machine learning operations, MLOps, freelance, freelancer, Moussa DIAKITE, personal portfolio"
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="favicon.ico" />
    </Head>
  </>
);

export default Seo;
