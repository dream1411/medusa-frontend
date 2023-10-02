import { Metadata } from "next"

export const metadata: Metadata = {
  title: "news",
  description: "news",
}

export default function news() {
    return (
        <div className="w-full flex justify-center py-24">
        ข้อมูลข่าวสาร
        </div>
      )
}
