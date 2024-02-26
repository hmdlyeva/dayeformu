"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { submitForm } from "../api/babysits/route";
import Link from "next/link";
import ThankYouModal from "../tesekkurmodal/page";
const BabysitsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    hourlyPrice: "",
    atHome: false,
    canCook: false,
    tooLate: false,
    useapp: false,
    language: [] as string[],
    addNote: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (name === "language") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value], 
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitForm(formData);
      setShowModal(true);
      console.log("Form Data successfully submitted to Firestore");
    } catch (error) {
      console.error("Error submitting form data to Firestore:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.formContainer}>
         <div style={{ display: "flex", justifyContent: "space-between" }}>

      <h2>Dayə formu</h2>
      <Link href="/"><button className={styles.button}>Geri</button></Link>
         </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Adınız:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="age">Yaşınız:</label>
          <input
            type="text"
            id="age"
            name="age"
            required
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="hourlyPrice">Saatlıq nə qədər məbləğə işləyərsiniz:</label>
          <input
            type="number"
            id="hourlyPrice"
            name="hourlyPrice"
            required
            value={formData.hourlyPrice}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
        <h4>
            Uşağa onun evində baxmaq sizə rahat olar yoxsa öz evinizdə?
          </h4>
          <label htmlFor="atHome">Uşağın evi:</label>
          <input
            type="checkbox"
            id="atHome"
            name="atHome"
            checked={formData.atHome}
            onChange={handleChange}
          />

<label htmlFor="atHome2"> Öz evim:</label>
          <input
            type="checkbox"
            id="atHome2"
            name="atHome2"
            // checked={formData.atHome}
            // onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
        <h4>
           Uşağa yemək bişirərsiniz?
          </h4>
          <label htmlFor="canCook">Bəli:</label>
          <input
            type="checkbox"
            id="canCook"
            name="canCook"
            checked={formData.canCook}
            onChange={handleChange}
          />

<label htmlFor="canCook2"> Xeyr:</label>
          <input
            type="checkbox"
            id="canCook2"
            name="canCook2"
            // checked={formData.canCook}
            // onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
        <h4>
           Gecə saatlarında da dayəyə ehtiyac olarsa işləyərsiniz?
          </h4>
          <label htmlFor="tooLate">Bəli:</label>
          <input
            type="checkbox"
            id="tooLate"
            name="tooLate"
            checked={formData.tooLate}
            onChange={handleChange}
          />

<label htmlFor="tooLate2"> Xeyr:</label>
          <input
            type="checkbox"
            id="tooLate2"
            name="tooLate2"
            // checked={formData.tooLate}
            // onChange={handleChange}
          />
        </div>


        <div className={styles.formGroup}>
            <h4>Asanlıqla dayəyə ehiyacı olan valideynləri tapa biləcəyiniz bir sayt olarsa istifadə edərdiniz?</h4>
          <label htmlFor="useapp">Bəli:</label>
          <input
            type="checkbox"
            id="useapp"
            name="useapp"
            checked={formData.useapp}
            onChange={handleChange}
          />

<label htmlFor="useapp"> Xeyr:</label>
          <input
            type="checkbox"
            id="useapp2"
            name="useapp2"
            // checked={formData.useapp}
            // onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="language">Dil biliyiniz:</label>
          <input
            type="text"
            id="language"
            name="language"
            placeholder="ingilis, rus"
            value={formData.language}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
        <label htmlFor="addNote">Bu sayt haqqında əlavə suallarınız varmı? maraqlarınızı bizə bildirin:</label>
          <textarea
            id="addNote"
            name="addNote"
            value={formData.addNote}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
      {showModal && <ThankYouModal onClose={closeModal} />}
    </div>
  );
};

export default BabysitsForm;
