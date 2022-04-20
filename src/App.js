import React, {
  useCallback,
  useState,
} from 'react';

const InputTextArea = (props) => {
  const { onChange, value } = props;

  return (
    <div className='m-4'>
      <textarea onChange={onChange} value={value}/>
      <div>count: {value.length}</div>
    </div>
  );
}

const StatusIcon = (props) => {
  const { success } = props;

  if (success) return (
    <div className="bg-green-500 rounded-full w-8 h-8"/>
  )
  return (
    <div className="bg-red-500 rounded-full w-8 h-8"/>
  )
}

function App() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const onTextAreaChage = useCallback((e, setValue) => {
    const { value } = e.target
    setValue(value)
  }, [])

  return (
    <div className="flex flex-col bg-gray-100 items-center h-screen p-8">
      <div className="bg-gray-50 shadow-md p-8 rounded-md flex flex-col items-center">
        <h1 className="m-4 font-bold">Awesome Text Area Compare ! (Dapp, or not)</h1>
        <div className="flex flex-row">
          <InputTextArea
            onChange={(e) => onTextAreaChage(e, setValue1)}
            value={value1}
          />
          <InputTextArea
            onChange={(e) => onTextAreaChage(e, setValue2)}
            value={value2}
          />
        </div>
        <div className="m-4 flex justify-center">
          <StatusIcon success={value1 === value2} />
        </div>
      </div>
    </div>
  );
}

export default App;
