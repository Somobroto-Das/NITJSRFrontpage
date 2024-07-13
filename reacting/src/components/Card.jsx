/* eslint-disable react/prop-types */
export function Cards(props) {
    return (
      <div className="productList flex flex-wrap justify-center mt-5">
        <div
          key={props.id}
          className="productCard relative m-2 flex-grow flex-shrink-0 basis-full sm:basis-[25rem] max-w-full sm:max-w-[30rem] max-h-[50rem] transition duration-200 hover:-translate-y-2 hover:custom-shadow"
        >
          <img
            src={props.image}
            alt="product-img"
            className="productImage mt-2 w-full h-auto"
          />
          <div className="productCard__content m-2">
            <h3 className="productName text-base">{props.name}</h3>
            <div className="displayStack__1">
              <div className="productSales">
                <a className="link link-error" href={props.Link}>
                  {props.productType}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  