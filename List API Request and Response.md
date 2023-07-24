#Models
* Video Thumbnail Model
```
{
  videoID: string
  UrlThumbnail: string
}
```
* Product Model
```
{
  productID: string
  productLink: string
  title: string
  price: number
}
```
* Comment Model
```
{
  videoID: string
  username: string
  coomment: string
  timestamps: datetime(iso 8601)
}
```
**GET /thumb/getThumb**
----
  Returns all thumbnails in Home Page.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  thumbnail: [
           {<videoID>},
           {<UrlThumbnail>}
         ]
}
```
**GET /product/:videoID**
----
  Returns the products from video thumbnail.
* **URL Params**  
  *Required:* `videoID=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  ```
{
  product: [
           {<productID>},
           {<productLink>},
		   {<title>},
		   {<price>}
         ]
}
``` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Thumbnail not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error : error : "Internal Server Error" }`
  
**GET /comment/:videoID**
----
  Returns the comments from video thumbnail.
* **URL Params**  
  *Required:* `videoID=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  ```
{
  product: [
           {<videoID>},
           {<username>},
		   {<comment>},
		   {<timestamp>}
         ]
}
``` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Thumbnail not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error : error : "Internal Server Error" }`
  
  
  **POST /thumb/create**
----
  Creates a new thumbnail to homepage.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    videoID: string,
    UrlThumbnail: string
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  ```
  {
    videoID: string,
    UrlThumbnail: string
  }
``` 
* **Error Response:**  
* **Code:** 500  
**Content:** `{ error : error : "Failed to save Thumbnail" }`
  
  
**POST /product/create**
----
  Creates a new product to video details.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
  productID: string
  productLink: string
  title: string
  price: number
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  ```
  {
  productID: string
  productLink: string
  title: string
  price: number
  }
``` 
* **Error Response:**  
* **Code:** 500  
**Content:** `{ error : error : "Failed to save Product" }`


**POST /comments/create**
----
  Creates a new comments to product.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
  videoID: string
  username: string
  coomment: string
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  ```
  {
  videoID: string
  username: string
  coomment: string
  timestamps: datetime(iso 8601)
  }
``` 
* **Error Response:**  
* **Code:** 500  
**Content:** `{ error : error : "Failed to save Product" }`