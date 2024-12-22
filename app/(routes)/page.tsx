import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('9e1da84a-5226-4fbc-b56f-c20c1c16d614');
  
    return (
      <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} />
        </div>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </Container>
    );
}

export default HomePage;
