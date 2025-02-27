import { getBlogPosts } from "@/lib/utils";
import Header from "@/components/Header";
import CallToAction from "@/sections/cta";
import Footer from "@/sections/footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  console.log(JSON.stringify(posts));
  return (
    <div className="flex flex-col items-center">
      <div className="bg-indigo-300 w-full h-[80px] lg:h-[100px]">
        <Header />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-6 justify-around w-full lg:w-[80%] border-l border-r border-gray-300 bg-indigo-100">
        <Card className="overflow-hidden">
          <div className="relative w-full aspect-[4/3] bg-[url(/hero-bg.jpg)] bg-cover bg-center" />
          <CardHeader>
            <CardDescription>Article Category</CardDescription>
            <CardTitle className="text-2xl">Article Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Article Preview</p>
          </CardContent>
          <Separator className="my-2 bg-gray-800 mx-auto w-[95%]" />
          <CardFooter>
            <Avatar>
              <AvatarImage src="/staff/peace.jpg" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <div className="ms-5">
              <h4>Name of Author</h4>
              <p>Date of Publication</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="relative bg-black">
        <div className="absolute inset-0 hidden lg:block bg-[url(/footer.jpg)] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}
