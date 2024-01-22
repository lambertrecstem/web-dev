import { useState, useEffect, createContext, ReactNode } from "react";
import {  Testimonial } from "../utils/managementInterfaces";
import axios from "../api/axios";
import { axiosPrivate } from "../api/axios";

const TestimonialDataContext = createContext<any>({});

interface Props {
  children: ReactNode;
}

export const TestimonialDataProvider = ({ children }: Props) => {
  const [page, setPage] = useState<string>("review");
  const [filter, setFilter] = useState<string>("");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [author, setAuthor] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [pictureURL, setPictureURL] = useState<string>("");
  const [saved, setSaved] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [testimonial, setTestimonial] = useState<Testimonial | null>();
  const [testimonialSubmitted, setTestimonialSubmitted] = useState(false);
  const [testimonialEdited, setTestimonialEdited] = useState(false);
  const [editedTestimonialID, setEditedTestimonialID] = useState<string>();
  const [deleteTestimonialID, setDeleteTestimonialID] = useState<string>();

  useEffect(() => {
    fetchTestimonials();
  }, [page]);
  useEffect(() => {
    addTestimonial();
  }, [testimonialSubmitted]);
  useEffect(() => {
    editTestimonial();
  }, [testimonialEdited]);
  useEffect(() => {
    deleteTestimonial();
  }, [deleteTestimonialID]);

  const fetchTestimonials = async () => {
    const controller = new AbortController();

    await axios
      .get<Testimonial[]>("/testimonials", { signal: controller.signal })
      .then((res) => {
        setTestimonials([...res.data]);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  const editTestimonial = async () => {
    const controller = new AbortController();

    await axiosPrivate
      .patch<Testimonial>("/testimonials/" + editedTestimonialID, testimonial, {
        signal: controller.signal,
      })
      .then((res: any) => {
        console.log(res);
        setEditMode(false);
        setTestimonialEdited(false);

        fetchTestimonials();
      })
      .catch((err: any) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  const addTestimonial = async () => {
    if (testimonial) {
      await axiosPrivate
        .post("/testimonials", testimonial)
        .then(() => {
          setTestimonialSubmitted(false);
          setTestimonial(null);
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteTestimonial = async () => {
    const controller = new AbortController();

    await axiosPrivate
      .delete<Testimonial[]>("/testimonials/" + deleteTestimonialID, {
        signal: controller.signal,
      })
      .then((res) => {
        res.data;

        fetchTestimonials();
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  return (
    <TestimonialDataContext.Provider
      value={{
        page,
        setPage,
        testimonials,
        setTestimonials,
        setTestimonial,
        testimonialSubmitted,
        setTestimonialSubmitted,
        setTestimonialEdited,
        editTestimonial,
        deleteTestimonial,
        fetchTestimonials,
        saved,
        setSaved,
        editMode,
        setEditMode,
        editedTestimonialID,
        setEditedTestimonialID,
        deleteTestimonialID,
        setDeleteTestimonialID,
        testimonialEdited,
        author, setAuthor,
        quote, setQuote,
        pictureURL, setPictureURL,
        filter, setFilter
        
      }}
    >
      {children}
    </TestimonialDataContext.Provider>
  );
};

export default TestimonialDataContext;
