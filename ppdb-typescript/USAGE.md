<!-- Start SDK Example Usage [usage] -->
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