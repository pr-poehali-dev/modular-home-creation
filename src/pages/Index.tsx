import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const Index = () => {
  const houseModels = [
    {
      title: "Эконом",
      size: "60 м²",
      price: "22,200",
      description: "Компактный дом для небольшой семьи",
      features: ["2 комнаты", "Кухня", "Санузел", "Терраса"],
      image: "/img/e56a2e29-397c-4ef4-af87-ee35ed9ca7dc.jpg"
    },
    {
      title: "Стандарт", 
      size: "80 м²",
      price: "29,600",
      description: "Оптимальный вариант для комфортного проживания",
      features: ["3 комнаты", "Кухня-гостиная", "2 санузла", "Балкон"],
      image: "/img/7af3418a-daee-4d92-8330-d54746f5dd3d.jpg"
    },
    {
      title: "Премиум",
      size: "120 м²", 
      price: "44,400",
      description: "Просторный дом с современной планировкой",
      features: ["4 комнаты", "Студия", "3 санузла", "2 балкона", "Гардероб"],
      image: "/img/aa745997-87c2-4acb-a1f0-e5ebcdd9b92d.jpg"
    }
  ]

  const advantages = [
    {
      icon: "Clock",
      title: "Быстро",
      description: "Строительство за 30-60 дней"
    },
    {
      icon: "Shield",
      title: "Качественно", 
      description: "Европейские стандарты качества"
    },
    {
      icon: "Heart",
      title: "Долговечно",
      description: "Гарантия 25 лет на конструкцию"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-secondary text-white py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={32} className="text-primary" />
            <span className="text-2xl font-heading font-bold">Лего Хом</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#why-us" className="hover:text-primary transition-colors">Почему мы</a>
            <a href="#models" className="hover:text-primary transition-colors">Модели</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Icon name="Phone" size={20} className="mr-2" />
            Звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 bg-gradient-to-br from-secondary to-secondary/90 text-white relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Модульные дома в
            <span className="text-primary block">Таджикистане</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Строим качественные, быстрые и долговечные дома по доступным ценам. 
            Европейское качество для вашего комфорта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-lg">
              <Icon name="DollarSign" size={24} className="text-primary mr-2" />
              <span>От $370 за м²</span>
            </div>
            <div className="flex items-center text-lg">
              <Icon name="Clock" size={24} className="text-primary mr-2" />
              <span>Срок: 30-60 дней</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              +992 981 66 44 22
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Почему именно мы?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in border-none">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* House Models */}
      <section id="models" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Модели домов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {houseModels.map((model, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in">
                <div className="h-48 rounded-t-lg overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-secondary font-heading">{model.title}</CardTitle>
                    <Badge className="bg-primary text-white">{model.size}</Badge>
                  </div>
                  <CardDescription className="text-lg">
                    <span className="text-2xl font-bold text-primary">${model.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment System */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Система оплаты
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">50%</span>
                  </div>
                  <CardTitle className="text-secondary">Аванс</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Предоплата при заключении договора</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">30%</span>
                  </div>
                  <CardTitle className="text-secondary">Каркас</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">При завершении строительства каркаса</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">20%</span>
                  </div>
                  <CardTitle className="text-secondary">Отделка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">При завершении внутренней отделки</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Hammer", title: "Строительство", desc: "Полный цикл строительства модульных домов" },
              { icon: "Ruler", title: "Проектирование", desc: "Индивидуальные проекты под ваши потребности" },
              { icon: "Truck", title: "Доставка", desc: "Доставка материалов на объект" },
              { icon: "Wrench", title: "Сервис", desc: "Обслуживание и гарантийный ремонт" }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-secondary mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 opacity-90">Готовы построить дом вашей мечты?</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
            <div className="flex items-center">
              <Icon name="Phone" size={24} className="text-primary mr-3" />
              <span className="text-lg">+992 981 66 44 22</span>
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" size={24} className="text-primary mr-3" />
              <span className="text-lg">Таджикистан</span>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Home" size={24} className="text-primary" />
            <span className="text-xl font-heading font-bold">Лего Хом</span>
          </div>
          <p className="text-sm opacity-70">© 2024 Лего Хом. Строим будущее вместе.</p>
        </div>
      </footer>
    </div>
  )
}

export default Index