export function InputText({ labelText, inputId }: { labelText: string, inputId: string }) {
    return (
      <div className="relative">
        <label 
          htmlFor={inputId} 
          className="text-gray-700 font-semibold mb-4"
        >
          {labelText}
        </label>
        <input 
          type="text" 
          id={inputId} 
          name={inputId} 
          required 
          className="w-full p-3 rounded-3xl border bg-box border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300"
        />
      </div>
    );
  }
  