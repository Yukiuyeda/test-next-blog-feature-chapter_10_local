"use client";

import React, { useState } from "react";
import { FormField } from "./_components/FormField";
import { Label } from "./_components/Label";
import { Input } from "./_components/Input";
import { ErrorMsg } from "./_components/ErrorMsg";
import { TextArea } from "./_components/Textarea";

const ContactForm: React.FC = () => {
  type ValuesType = { name: string; mailAddress: string; content: string };
  type ErrorsType = { name?: string; mailAddress?: string; content?: string };

  const initialValues: ValuesType = { name: "", mailAddress: "", content: "" };
  const [formValues, setFormValues] = useState<ValuesType>(initialValues);

  const [errors, setErrors] = useState<ErrorsType>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  //Stateの更新
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  //バリデーションチェック
  const validate = (values: ValuesType): boolean => {
    const _errors: ErrorsType = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      _errors.name = "お名前は必須です。";
    } else if (values.name.length > 30) {
      _errors.name = "お名前は30文字以内で入力してください。";
    }
    if (!values.mailAddress) {
      _errors.mailAddress = "メールアドレスは必須です。";
    } else if (!regex.test(values.mailAddress)) {
      _errors.mailAddress = "正しいメールアドレスを入力してください。";
    }
    if (!values.content) {
      _errors.content = "本文は必須です。";
    } else if (values.content.length > 500) {
      _errors.content = "本文は500文字以内で入力してください。";
    }

    setErrors(_errors);

    if (Object.keys(_errors).length === 0) return true;

    return false;
  };

  //送信ボタンをおしたとき
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //バリデーション失敗
    if (!validate(formValues)) return;

    //バリデーション成功したとき
    //送信ボタンを無効に
    setIsSubmitting(true);
    await fetch(
      "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.mailAddress,
          message: formValues.content,
        }),
      }
    );

    alert("送信しました。");
    //内容を初期化
    setFormValues(initialValues);
    //送信ボタンを有効に
    setIsSubmitting(false);
  };

  //クリアボタンで内容を初期化
  const handleClear = (): void => {
    setFormValues(initialValues);
  };

  return (
    <div className="flex justify-center">
      <form className="max-w-[800px] w-full py-10" onSubmit={handleSubmit}>
        <div className="text-lg font-bold mb-10">問合わせフォーム</div>

        {/* 名前 */}
        <FormField>
          <Label htmlFor="name" labelTitle="お名前" />
          <div className="w-3/4">
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              value={formValues.name}
            />
            <ErrorMsg message={errors.name} />
          </div>
        </FormField>

        {/* メールアドレス */}
        <FormField>
          <Label htmlFor="mailAddress" labelTitle="メールアドレス" />
          <div className="w-3/4">
            <Input
              type="email"
              name="mailAddress"
              onChange={handleChange}
              value={formValues.mailAddress}
            />
            <ErrorMsg message={errors.mailAddress} />
          </div>
        </FormField>

        {/* 本文 */}
        <FormField>
          <Label htmlFor="content" labelTitle="本文" />
          <div className="w-3/4">
            <TextArea
              name="content"
              onChange={handleChange}
              value={formValues.content}
            />
            <ErrorMsg message={errors.content} />
          </div>
        </FormField>

        {/* ボタン群 */}
        <div className="flex justify-center gap-4">
          <button
            className="h-10 rounded-lg px-4 bg-gray-800 text-white"
            type="submit"
            disabled={isSubmitting}
          >
            送信
          </button>
          <button
            className="h-10 rounded-lg px-4 bg-gray-100"
            type="button"
            onClick={handleClear}
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
