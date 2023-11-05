import { AzureFunction, Context } from "@azure/functions"

const cosmosDBTrigger: AzureFunction = async function (context: Context, documents: any[]): Promise<void> {
    const version = "v7";
    const invocationId = context.invocationId;
    const instanceId = process.env["WEBSITE_INSTANCE_ID"];

    if (!!documents && documents.length > 0) {
        const documentId = documents[0].id;
        context.log(`Function Version: ${version} InvovationID: ${invocationId} InstanceId: ${instanceId} Target Document Id: ${documentId}`);
    }
}

export default cosmosDBTrigger;
