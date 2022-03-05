import ReactMarkdown from 'react-markdown'

const Description: React.FC<{ description: string; features: string }> = ({ description, features }) => {
  console.log('_data', description, features)

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="bg-white p-5">
        <div className="mb-4 text-black font-bold text-20">Description</div>
        <div className="text-black text-base">{description}</div>
      </div>
      <div className="bg-white p-5">
        <div className="mb-4 text-black font-bold text-20">Highlights</div>
        <div>
          <ReactMarkdown>{features}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Description
