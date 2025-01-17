# ppdb

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Ppdb } from "ppdb";

const ppdb = new Ppdb({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await ppdb.getAnimals(1, 10, "animalname,asc");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Ppdb SDK](docs/sdks/ppdb/README.md)

* [getAnimals](docs/sdks/ppdb/README.md#getanimals) - List all animals
* [postAnimals](docs/sdks/ppdb/README.md#postanimals) - Create a new animal
* [getAnimalsAnimalID](docs/sdks/ppdb/README.md#getanimalsanimalid) - Get an animal by ID
* [putAnimalsAnimalID](docs/sdks/ppdb/README.md#putanimalsanimalid) - Update an animal
* [deleteAnimalsAnimalID](docs/sdks/ppdb/README.md#deleteanimalsanimalid) - Delete an animal
* [getBreeds](docs/sdks/ppdb/README.md#getbreeds) - List all breeds
* [postBreeds](docs/sdks/ppdb/README.md#postbreeds) - Create a new breed
* [getBreedsBreedID](docs/sdks/ppdb/README.md#getbreedsbreedid) - Get a breed by ID
* [putBreedsBreedID](docs/sdks/ppdb/README.md#putbreedsbreedid) - Update a breed
* [deleteBreedsBreedID](docs/sdks/ppdb/README.md#deletebreedsbreedid) - Delete a breed
* [getCustomers](docs/sdks/ppdb/README.md#getcustomers) - List all customers
* [postCustomers](docs/sdks/ppdb/README.md#postcustomers) - Create a new customer
* [getCustomersCustomerID](docs/sdks/ppdb/README.md#getcustomerscustomerid) - Get a customer by ID
* [putCustomersCustomerID](docs/sdks/ppdb/README.md#putcustomerscustomerid) - Update a customer
* [deleteCustomersCustomerID](docs/sdks/ppdb/README.md#deletecustomerscustomerid) - Delete a customer
* [getCustomersCustomerIDAnimals](docs/sdks/ppdb/README.md#getcustomerscustomeridanimals) - List all animals owned by a customer
* [getAnimalsAnimalIDNotes](docs/sdks/ppdb/README.md#getanimalsanimalidnotes) - List all notes for an animal
* [getNotes](docs/sdks/ppdb/README.md#getnotes) - List all notes
* [postNotes](docs/sdks/ppdb/README.md#postnotes) - Create a new note
* [getNotesNoteID](docs/sdks/ppdb/README.md#getnotesnoteid) - Get a note by ID
* [putNotesNoteID](docs/sdks/ppdb/README.md#putnotesnoteid) - Update a note
* [deleteNotesNoteID](docs/sdks/ppdb/README.md#deletenotesnoteid) - Delete a note
* [getUsers](docs/sdks/ppdb/README.md#getusers) - List all users
* [postUsers](docs/sdks/ppdb/README.md#postusers) - Create a new user
* [getUsersUserID](docs/sdks/ppdb/README.md#getusersuserid) - Get a user by ID
* [putUsersUserID](docs/sdks/ppdb/README.md#putusersuserid) - Update a user
* [deleteUsersUserID](docs/sdks/ppdb/README.md#deleteusersuserid) - Delete a user
* [getSearch](docs/sdks/ppdb/README.md#getsearch) - Search across customers and animals
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object             | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.UnauthorizedError | 401                      | application/json         |
| errors.SDKError          | 4xx-5xx                  | */*                      |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Ppdb } from "ppdb";
import * as errors from "ppdb/models/errors";

const ppdb = new Ppdb({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
    let result;
    try {
        result = await ppdb.getAnimals(1, 10, "animalname,asc");
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.UnauthorizedError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost:8080/api` | None |

```typescript
import { Ppdb } from "ppdb";

const ppdb = new Ppdb({
    serverIdx: 0,
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await ppdb.getAnimals(1, 10, "animalname,asc");

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Ppdb } from "ppdb";

const ppdb = new Ppdb({
    serverURL: "http://localhost:8080/api",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await ppdb.getAnimals(1, 10, "animalname,asc");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Ppdb } from "ppdb";
import { HTTPClient } from "ppdb/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Ppdb({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `apiKeyAuth` | apiKey       | API key      |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Ppdb } from "ppdb";

const ppdb = new Ppdb({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await ppdb.getAnimals(1, 10, "animalname,asc");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
