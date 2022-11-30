const dev = {
  "NUM_NODES": 3,
  "BASE_URL": "https://127.0.0.1",
  "NODES": [
    {
      "id": 0,
      "name": "ALICE",
      "macaroon": "0201036c6e6402f801030a10c5584b84ed6851f6729101a9bba613d21201301a160a0761646472657373120472656164120577726974651a130a04696e666f120472656164120577726974651a170a08696e766f69636573120472656164120577726974651a210a086d616361726f6f6e120867656e6572617465120472656164120577726974651a160a076d657373616765120472656164120577726974651a170a086f6666636861696e120472656164120577726974651a160a076f6e636861696e120472656164120577726974651a140a057065657273120472656164120577726974651a180a067369676e6572120867656e65726174651204726561640000062080eb253e7a93d9bd29886107062114c1dba7710136638d1d2ba2f68205441712",
      "port": 8081,
      "url": "https://127.0.0.1:8081"
    },
    {
      "id": 1,
      "name": "BOB",
      "macaroon": "0201036c6e6402f801030a1004be477437e0c1f12f0bad3b4bb1c7621201301a160a0761646472657373120472656164120577726974651a130a04696e666f120472656164120577726974651a170a08696e766f69636573120472656164120577726974651a210a086d616361726f6f6e120867656e6572617465120472656164120577726974651a160a076d657373616765120472656164120577726974651a170a086f6666636861696e120472656164120577726974651a160a076f6e636861696e120472656164120577726974651a140a057065657273120472656164120577726974651a180a067369676e6572120867656e65726174651204726561640000062017d9f7ad354f3174ce6fd3559f44802b7b45eb58589d9bf142468423b88f866a",
      "port": 8082,
      "url": "https://127.0.0.1:8082"
    },
    {
      "id": 2,
      "name": "CAROL",
      "macaroon": "0201036c6e6402f801030a10875d028f1b9125b6fca30ab39b368c911201301a160a0761646472657373120472656164120577726974651a130a04696e666f120472656164120577726974651a170a08696e766f69636573120472656164120577726974651a210a086d616361726f6f6e120867656e6572617465120472656164120577726974651a160a076d657373616765120472656164120577726974651a170a086f6666636861696e120472656164120577726974651a160a076f6e636861696e120472656164120577726974651a140a057065657273120472656164120577726974651a180a067369676e6572120867656e6572617465120472656164000006206c0c48e628070747d570c7d7a2db4ab79226a71cac5a2b7b3479ea9ae6202fcc",
      "port": 8083,
      "url": "https://127.0.0.1:8083"
    }
  ],
  "NODE_NAMES": [
    "ALICE",
    "BOB",
    "CAROL"
  ]
}

const prod = {};

const config = process.env.REACT_APP_ENV === 'production' ? prod : dev;

export const Env = { ...config,};