import Button from "@/components/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const employeeOfMonthCard = (name: string, sale: number, img: string) => ({
  title: "Employee of the Month",
  heading: "Congratulations " + name,
  description: "Best seller of the month",
  thisMonthsSale: sale,
  imageSrc: img,
  imageAlt: "Employee of the Month",
  render: function () {
    return (
      <div className="flex gap-3 py-2">
        <div className="flex flex-col gap-1">
          <h2>{`Congratulations ${name}! 🎉`}</h2>
          <small>{this.description}</small>
          <span className="text-secondary">${this.thisMonthsSale}k</span>
          <Button variation="primary" rounded className="w-fit px-5">
            View Sales
          </Button>
        </div>
        <Avatar className="my-auto">
          <AvatarImage src={this.imageSrc} alt={this.imageAlt} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </div>
    );
  },
});
