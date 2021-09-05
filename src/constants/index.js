import config from '../config.json';
export const server = process.env.NODE_ENV === 'development' ? config.server.local : config.server.prod;

export function determineStatusMessage(response) {
    switch(response.status) {
        case 200:
            response.message = "Data retrieved successfully.";
            response.resolved = true;
            response.isJsonResponse= true;
            break;
        case 201:
            response.message = "Data created successfully.";
            response.resolved = true;
            response.isJsonResponse = true;
            break;
        case 202:
            response.message = "Batch processed successfully.";
            response.resolved = true;
            response.isJsonResponse = false;
            break;
        case 203:
            response.message = "Backed up successfully.";
            response.resolved = true;
            response.isJsonResponse = false;
            break;
        case 204:
            response.message = 'No content returned, response successful.';
            response.resolved = true;
            response.isJsonResponse = false;
            break;
        case 304:
            response.message = "Request successful, WARNING: Data not motified.";
            response.resolved = false;
            response.isJsonResponse = false;
            break;
        case 305:
            response.message = "Proxy Error.";
            response.resolved = false;
            response.isJsonResponse = false;
            break;
        case 400:
            response.message = "Bad Request.";
            response.resolved = false;
            response.isJsonResponse = false;
            break;
        case 401:
            response.message = "Unauthorized ";
            response.resolved = false;
            response.isJsonResponse = false;
            break;
        case 404:
            response.message = "Not found";
            response.resolved = false;
            response.isJsonResponse = false;
            break;
        case 415:
            response.message = "Something wrong with body of response";
            response.resolved = false;
            response.isJsonResponse = false;
            break;
        default:
            response.message = "Server error."
            response.resolved = false;
            response.isJsonResponse = false;
            break;
    }
    return response;
}