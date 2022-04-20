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

function App() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const onTextAreaChage = useCallback((e, setValue) => {
    const { value } = e.target
    setValue(value)
  }, [])

  return (
    <div className="flex flex-col bg-gray-100 items-center h-screen p-8">
      <InputTextArea onChange={(e) => onTextAreaChage(e, setValue1)} value={value1}/>
      <InputTextArea onChange={(e) => onTextAreaChage(e, setValue2)} value={value2}/>
      <div>
        Diff: {value1 === value2 ? 'Same value' : 'Not the same value'}
      </div>
    </div>
  );
}

export default App;
