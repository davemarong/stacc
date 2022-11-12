// IMPORT

// REACT

// MUI

// COMPONENTS

// UTILS

// DATA

// TYPE/INTERFACE
interface Props {
  data: any;
}
// FUNCTIONAL COMPONENT
export const Display_Result = ({ data }: Props) => {
  // STATE

  // FUNCTIONS

  // RETURN
  return (
    <>
      {data.map((item: any) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <button>Save</button>
          </div>
        );
      })}
    </>
  );
};
