# API Tugas MongoDB (Week 10)

<br>

This REST-API was created with Node.JS v14.21.3

Hosted at [Cyclic.sh](https://app.cyclic.sh/)

<br>

This API have two available version:
- v1 : uses MongoDB driver
- v2 : uses Mongoose ODM

<br>

## How to run

    npm run start

## Usage


 - GET all data
> send GET request to 'api/*version*/'

<br>

- Add a product
> send POST request to 'api/*version*/add-product/'


<br>

 - Edit a document
>  send PUT request to 'api/*version*/update-product/

<br>

- Delete a document
> send DELETE request to 'api/*version*/delete-product/*:id*'

*replace the ':id' with product's id*

<br>

Replace 'version' with 'v1' or 'v2' accordingly.

Send requests to : https://eager-pear-handbag.cyclic.app/