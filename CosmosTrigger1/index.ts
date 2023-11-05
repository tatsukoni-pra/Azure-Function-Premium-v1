import { AzureFunction, Context } from "@azure/functions"

const cosmosDBTrigger: AzureFunction = async function (context: Context, documents: any[]): Promise<void> {
    const version = "v5";

    if (!!documents && documents.length > 0) {
        const documentId = documents[0].id;
        context.log(`Function Version: ${version} Target Document Id: ${documentId}`);
    }
}

export default cosmosDBTrigger;
