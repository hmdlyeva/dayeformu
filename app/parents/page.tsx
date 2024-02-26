"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { submitForm } from "../../utils/submitForm";
import Link from "next/link";
// import ThankYouModal from "../tesekkurmodal/page";

const ParentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    childname: "",
    childage: "",
    givePrice: "",
    atHome: false,
    need: false,
    trust: false,
    useapp: false,
    addNote: "",
  });
  // const [showModal, setShowModal] = useState(false);

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
      // setShowModal(true);
      console.log("Form Data successfully submitted to Firestore");
    } catch (error) {
      console.error("Error submitting form data to Firestore:", error);
    }
  };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div className={styles.formContainer}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Valideyn formu</h2>
        <Link href="/">
          <button className={styles.button}>Geri</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="childname">Uşağın adı:</label>
          <input
            type="text"
            id="childname"
            required
            name="childname"
            value={formData.childname}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="childage">Uşağın yaşı:</label>
          <input
            type="number"
            id="childage"
            name="childage"
            required
            value={formData.childage}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="hourlyPrice">
            Dayə kirayə götürsəniz saatlıq hansı məbləği ödəməyə razı
            olarsınız?:
          </label>
          <input
            type="number"
            id="givePrice"
            required
            name="givePrice"
            value={formData.givePrice}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <h4>
            Dayə kirayə götürmək istəsəniz uşağınıza harada baxması sizə uyğun
            olar?
          </h4>
          <label htmlFor="atHome">Mənim evimdə:</label>
          <input
            type="checkbox"
            id="atHome"
            name="atHome"
            checked={formData.atHome}
            onChange={handleChange}
          />

          <label htmlFor="atHome2"> Dayənin evində:</label>
          <input
            type="checkbox"
            id="atHome2"
            name="atHome2"
            // checked={formData.atHome}
            // onChange={handleChange}
          />
        </div>
        <h4>Dayəyə ehtiyacınız olduğu anlarla üzləşmisinizmi?</h4>
        <div className={styles.formGroup}>
          <label htmlFor="need">Bəli:</label>
          <input
            type="checkbox"
            id="need"
            name="need"
            checked={formData.need}
            onChange={handleChange}
          />
          <label htmlFor="canCook2"> Xeyr:</label>
          <input
            type="checkbox"
            id="need2"
            name="need2"
            // checked={formData.need}
            // onChange={handleChange}
          />
        </div>

        <h4>Uşağınızı dayəyə etibar edərsiniz?</h4>
        <div className={styles.formGroup}>
          <label htmlFor="trust">Bəli:</label>
          <input
            type="checkbox"
            id="trust"
            name="trust"
            checked={formData.trust}
            onChange={handleChange}
          />

          <label htmlFor="tooLate"> Xeyr:</label>
          <input
            type="checkbox"
            id="trust2"
            name="trust2"
            // checked={formData.trust}
            // onChange={handleChange}
          />
        </div>

        <h4>
          Asanlıqla usağınııza dayə tapa biləcəyiniz bir sayt olsa idi istifadə
          edərdiniz?
        </h4>
        <div className={styles.formGroup}>
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
          <label htmlFor="addNote">
            Bu sayt haqqında əlavə suallarınız varmı? maraqlarınızı bizə
            bildirin:
          </label>
          <textarea
            id="addNote"
            name="addNote"
            value={formData.addNote}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
      {/* {showModal && <ThankYouModal onClose={closeModal} />} */}
    </div>
  );
};

export default ParentForm;
