import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
export interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}
export const PricingCard = ({
  title,
  price,
  features,
  popular,
}: PricingCardProps) => (
  <fieldset>
    {popular && <legend>Personalia:</legend>}
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Starting At</CardDescription>
      </CardHeader>
      <CardContent>
        {price}
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index}>{feature}</div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Purchase</Button>
      </CardFooter>
    </Card>
  </fieldset>
);
