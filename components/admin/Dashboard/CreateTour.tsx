"use client";
import React, { useState } from "react";
import { PiUpload } from "react-icons/pi";
import { Formik, FieldArray, Field, Form, ErrorMessage } from "formik";
import createTourSchema from "@/validations/createTourSchema";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateTour() {
  const [images, setImages] = useState<string[]>([]);
  const [imageInputCount, setImageInputCount] = useState<number>(6);
  const [tourType, setTourType] = useState("");

  const _handleSubmit = (values: any) => {
    const formData = new FormData();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        duration: "",
        groupSize: "",
        tourCategory: "",
        overView: "",
        highlight: "",
        durationDesc: "",
        rating: "",
        questionAnswer: [{ question: "", answer: "" }],
        tourDateTime: [{ days: [], times: [], hours: "" }],
        tripType: { departure: "", turnaround: "" },
        included: [],
        excluded: [],
        location: [
          { country: "", city: "", state: "", map: { lat: "", lon: "" } },
        ],
        extra: [{ name: "", price: "" }],
        transfer: [{ isActive: true, location: "", price: "" }],
        prices: [
          { code: "", price: "", childPrices: [{ age: "", price: "" }] },
        ],
        tourSubCategory: "",
        languages: [],
        note: "",
      }}
      validationSchema={createTourSchema}
      onSubmit={(values) => {
        console.log("Form Submitted", values);
      }}
    >
      {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="space-y-6">
          {/* Tur Bilgisi */}
          <div className="rounded border border-gray-300 p-6 shadow-md">
            <h2 className="text-lg font-semibold text-center mb-4">
              TUR BİLGİSİ
            </h2>

            <div>
              <label className="block text-sm my-2 font-medium">Tur Adı</label>
              <Field
                name="name"
                placeholder="Tur adı girin"
                className="w-full rounded border px-4 py-2"
              />
            </div>

            <div className="grid gap-x-3 my-4 items-center grid-cols-3">
              <div>
                <label className="block text-sm font-medium">
                  Tur Kategorisi
                </label>
                <Field
                  name="tourCategory"
                  placeholder="Kategori seçin"
                  as="select"
                  className="w-full rounded border px-4 py-2"
                >
                  <option value="" disabled>
                    Seçiniz
                  </option>
                  <option value="nature">Doğa</option>
                  <option value="historical">Tarihi</option>
                  <option value="adventure">Macera</option>
                </Field>
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Tur Alt Kategori
                </label>
                <Field
                  name="tourCategory"
                  placeholder="Kategori seçin"
                  as="select"
                  className="w-full rounded border px-4 py-2"
                >
                  <option value="">Seçiniz</option>
                  <option value="nature">Doğa</option>
                  <option value="historical">Tarihi</option>
                  <option value="adventure">Macera</option>
                </Field>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Grup Büyüklüğü
                </label>
                <Field
                  name="groupSize"
                  placeholder="Max kişi sayısı"
                  className="w-full rounded border px-4 py-2"
                />
              </div>
            </div>

            {/* TOUR DATE TIME */}
            <div className="flex flex-row items-center gap-x-10">
              <button
                onClick={() => setTourType("daily")}
                className={`${
                  tourType === "daily"
                    ? "bg-primary text-white"
                    : "border"
                } text-sm p-1 rounded-xl`}
              >
                Günübirlik
              </button>
              <button
                onClick={() => setTourType("long")}
                className={`${
                  tourType === "long"
                    ? "bg-primary text-white"
                    : "border"
                } text-sm p-1 rounded-xl`}
              >
                Günlük
              </button>
            </div>

            <div className="grid grid-cols-3 my-4 gap-x-4">
              <div className={`${tourType === 'daily' ? 'hidden':'block'}`}>
                <label className="block text-sm font-medium">Tur Günleri</label>
                <Field
                  name="duration"
                  placeholder="Süre (örneğin: 5 Gün)"
                  className="w-full rounded border px-4 py-2"
                />
              </div>
              <div className={`${tourType === 'daily' ? 'hidden':'block'}`}>
                <label className="block text-sm font-medium">Tur Saatleri</label>
                <Field
                  name="duration"
                  type='time'
                  placeholder="Süre (örneğin: 5 Gün)"
                  className="w-full rounded border px-4 py-2"
                />
              </div>
              <div className={`${tourType === 'long' ? 'hidden':'block'}`}>
                <label className="block text-sm font-medium">Tur Süresi</label>
                <Field
                  name="duration"
                  placeholder="Süre (örneğin: 5 Gün)"
                  className="w-full rounded border px-4 py-2"
                />
              </div>
            </div>
            {/* TOUR DATE TIME END */}

            <div className="mb-4">
              <label className="block text-sm my-2 font-medium">
                Genel Bakış
              </label>
              <ReactQuill
                className="bg-white"
                theme="snow"
                value={values.overView}
                onChange={handleChange("overView")}
              />
              {/* <Field
                name="overView"
                as="textarea"
                placeholder="Tur hakkında kısa bilgi"
                rows="3"
                className="w-full rounded border px-4 py-2"
              /> */}
            </div>
          </div>

          <div className="grid grid-cols-2 justify-around">
            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2">
                Included | Excluded
              </h3>
              <ul>
                {values.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>{item}</span>
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => {
                        // Listedeki öğeyi kaldır
                        const updatedIncluded = values.included.filter(
                          (i) => i !== item
                        );
                        setFieldValue("included", updatedIncluded);
                      }}
                    >
                      Kaldır
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <label className="block text-sm font-medium">
              Tur Alt Kategori
            </label>
            <Field
              name="tourCategory"
              as="select"
              className="w-full rounded border px-4 py-2"
              onChange={(e: any) => {
                const value = e.target.value;
                if (value) {
                  // `included` listesine ekleme
                  setFieldValue("included", [...values.included, value]);
                }
              }}
            >
              <option value="">Seçiniz</option>
              <option value="nature">Doğa</option>
              <option value="historical">Tarihi</option>
              <option value="adventure">Macera</option>
            </Field>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Kaydet
          </button>

          {/* Sorular ve Cevaplar */}
          <div className="rounded border border-gray-300 p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Sorular ve Cevaplar</h2>
            <FieldArray name="questionAnswer">
              {({ push, remove }) => (
                <div>
                  {values.questionAnswer.map((item, index) => (
                    <div key={index} className="mb-4 flex gap-4">
                      <div className="flex flex-col w-full">
                        <Field
                          name={`questionAnswer[${index}].question`}
                          placeholder="Soru"
                          className="flex-1 flex-col rounded border px-4 py-2"
                        />
                        <ErrorMessage
                          name={`questionAnswer[${index}].question`}
                        />
                      </div>

                      <div className="flex flex-col w-full">
                        <Field
                          name={`questionAnswer[${index}].answer`}
                          placeholder="Cevap"
                          className="flex-1 rounded border px-4 py-2"
                        />
                        <ErrorMessage
                          name={`questionAnswer[${index}].answer`}
                          component="span"
                          className="text-red-600 text-xs"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                      >
                        Sil
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => push({ question: "", answer: "" })}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Yeni Ekle
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          {/* Fiyatlandırma */}
          <div className="rounded border border-gray-300 p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Fiyatlandırma</h2>
            <FieldArray name="prices">
              {({ push: pushPrice, remove: removePrice }) => (
                <div>
                  {values.prices.map((price, priceIndex) => (
                    <div key={priceIndex} className="mb-4">
                      <div className="flex gap-4">
                        <Field
                          as="select"
                          name={`prices[${priceIndex}].code`}
                          placeholder="Para Birimi"
                          className="rounded border px-4 py-2"
                        >
                          <option value="" label="Seçiniz" disabled />
                          <option value="TRY">TRY</option>
                          <option value="EUR">EUR</option>
                          <option value="USD">USD</option>
                        </Field>
                        <Field
                          name={`prices[${priceIndex}].price`}
                          placeholder="Fiyat"
                          className="rounded border px-4 py-2"
                        />
                        <button
                          type="button"
                          onClick={() => removePrice(priceIndex)}
                          className="px-4 py-2 bg-red-500 text-white rounded"
                        >
                          Sil
                        </button>
                      </div>
                      <div className="mt-4 ml-4 border-l pl-4">
                        <h3 className="text-md font-medium mb-2">
                          Çocuk Fiyatları
                        </h3>
                        <FieldArray name={`prices[${priceIndex}].childPrices`}>
                          {({
                            push: pushChildPrice,
                            remove: removeChildPrice,
                          }) => (
                            <div>
                              {price.childPrices?.map(
                                (childPrice, childIndex) => (
                                  <div
                                    key={childIndex}
                                    className="mb-2 flex gap-4"
                                  >
                                    <Field
                                      name={`prices[${priceIndex}].childPrices[${childIndex}].age`}
                                      placeholder="Çocuk Yaş"
                                      className="rounded border px-4 py-2"
                                    />
                                    <Field
                                      name={`prices[${priceIndex}].childPrices[${childIndex}].price`}
                                      placeholder="Çocuk Fiyat"
                                      className="rounded border px-4 py-2"
                                    />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        removeChildPrice(childIndex)
                                      }
                                      className="px-4 py-2 bg-red-500 text-white rounded"
                                    >
                                      Sil
                                    </button>
                                  </div>
                                )
                              )}
                              <button
                                type="button"
                                onClick={() =>
                                  pushChildPrice({ age: "", price: "" })
                                }
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                              >
                                Yeni Çocuk Fiyatı Ekle
                              </button>
                            </div>
                          )}
                        </FieldArray>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      pushPrice({ code: "", price: "", childPrices: [] })
                    }
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Yeni Ekle
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          {/* Lokasyon Bilgisi */}
          <div className="rounded border border-gray-300 p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Lokasyon Bilgisi</h2>
            <FieldArray name="location">
              {({ push, remove }) => (
                <div>
                  {values.location.map((item, index) => (
                    <div key={index} className="mb-4 space-y-4">
                      <Field
                        name={`location[${index}].country`}
                        placeholder="Ülke"
                        className="w-full rounded border px-4 py-2"
                      />
                      <Field
                        name={`location[${index}].city`}
                        placeholder="Şehir"
                        className="w-full rounded border px-4 py-2"
                      />
                      <Field
                        name={`location[${index}].state`}
                        placeholder="Eyalet / Bölge"
                        className="w-full rounded border px-4 py-2"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Field
                          name={`location[${index}].map.lat`}
                          placeholder="Enlem (Lat)"
                          className="w-full rounded border px-4 py-2"
                        />
                        <Field
                          name={`location[${index}].map.lon`}
                          placeholder="Boylam (Lon)"
                          className="w-full rounded border px-4 py-2"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                      >
                        Sil
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      push({
                        country: "",
                        city: "",
                        state: "",
                        map: { lat: "", lon: "" },
                      })
                    }
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Yeni Lokasyon Ekle
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded"
            >
              Kaydet
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
