import { Search, Bell, MessageCircle, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PinCard } from "@/components/pin-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center mr-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
          </Link>

          <Button variant="secondary" className="mr-2 rounded-full">
            ホーム
          </Button>
          <Button variant="ghost" className="mr-2 rounded-full">
            作成
          </Button>

          <div className="relative flex-1 mx-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <Input className="pl-10 bg-gray-100 border-none rounded-full" placeholder="検索" />
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-6 mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <PinCard
            imageUrl="/placeholder.svg?height=300&width=200"
            title="美しい山の風景"
            username="nature_lover"
            height={300}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=400&width=200"
            title="おいしい料理のレシピ"
            username="food_master"
            height={400}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=250&width=200"
            title="DIYインテリアのアイデア"
            username="home_designer"
            height={250}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=350&width=200"
            title="旅行先のおすすめスポット"
            username="travel_guide"
            height={350}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=280&width=200"
            title="ファッションコーディネート"
            username="style_expert"
            height={280}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=320&width=200"
            title="ガーデニングのコツ"
            username="plant_lover"
            height={320}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=360&width=200"
            title="アートワーク集"
            username="creative_artist"
            height={360}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=270&width=200"
            title="ワークアウトのヒント"
            username="fitness_coach"
            height={270}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=330&width=200"
            title="かわいいペットの写真"
            username="animal_friend"
            height={330}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=290&width=200"
            title="手作りクラフトのアイデア"
            username="craft_master"
            height={290}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=310&width=200"
            title="美しい日の出の写真"
            username="photo_enthusiast"
            height={310}
          />
          <PinCard
            imageUrl="/placeholder.svg?height=340&width=200"
            title="インスピレーションを与える名言"
            username="motivation_guru"
            height={340}
          />
        </div>
      </main>
    </div>
  )
}
