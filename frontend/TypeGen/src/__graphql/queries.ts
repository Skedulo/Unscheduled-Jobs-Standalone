declare module "*/queries.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  const fetchJobsWithJobProducts: DocumentNode;
  const fetchRegion: DocumentNode;
  const fetchProducts: DocumentNode;
  const fetchEduMeSettings: DocumentNode;
  const fetchResources: DocumentNode;
  const fetchErrorLogs: DocumentNode;

  export {
    fetchJobsWithJobProducts,
    fetchRegion,
    fetchProducts,
    fetchEduMeSettings,
    fetchResources,
    fetchErrorLogs
  };

  export default defaultDocument;
}
