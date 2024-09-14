import React from "react";

type props = {
  newMode: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onDelete?: () => void;
  name: string;
  setName: (name: string) => void;
};

const CategoriesForm: React.FC<props> = ({
  newMode,
  onSubmit,
  onDelete,
  name,
  setName,
}) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-6">カテゴリー作成ページ</h2>
      <form onSubmit={onSubmit} className="flex flex-col">
        <label htmlFor="name" className="text-sm text-gray-700">
          カテゴリー
        </label>
        <input
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="p-3 border-gray-400 border rounded-sm mt-2 mb-4 w-[300px]"
        />
        {/* 表示ボタンの切替え */}

        {newMode ? (
          // 作成ボタン
          <button
            type="submit"
            className="flex justify-center w-[70px] mt-10 py-2 px-4 text-white border-gray-400 bg-green-500 rounded hover:cursor hover:bg-green-700 transition-all"
          >
            作成
          </button>
        ) : (
          <div className="flex">
            {/* 更新ボタン */}
            <button
              type="submit"
              className="flex justify-center w-[70px] mt-10 py-2 my-auto px-4 text-white border-gray-400 bg-green-500 rounded hover:cursor hover:bg-green-700 transition-all"
            >
              更新
            </button>
            {/* 削除ボタン */}
            <button
              type="button"
              className="flex justify-center w-[70px] mt-10 ml-4 py-2 px-4 text-white border-gray-400 bg-red-500 rounded hover:cursor hover:bg-red-700 transition-all"
              onClick={onDelete}
            >
              削除
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CategoriesForm;
