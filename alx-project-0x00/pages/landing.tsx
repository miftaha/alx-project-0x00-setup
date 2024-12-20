import Button from '@/components/Button'
import Card from '@/components/Card'

const Landing: React.FC = () => {
  return (
    <div>
      <div>
        <Button title="Add" styles="text-sm rounded-sm" />
      </div>
      <div>
        <Button title="Edit" styles="text-md rounded-md" />
      </div>
      <div>
        <Button title="Add" styles="text-lg rounded-full" />
      </div>
      <h1 className=" text-xl font-extralight  ">Landing Page</h1>
      <Card />
    </div>
  )
}
export default Landing
