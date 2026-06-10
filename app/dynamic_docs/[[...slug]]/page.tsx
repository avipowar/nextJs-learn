import React from "react";

// @ts-ignore
const DynamicDocumentPage = async ({ params }) => {
  const { slug } = await params;
  return <div>DynamicDocumentPage, {slug?.join("/")}</div>;
};

export default DynamicDocumentPage;
