import { certifications } from "../../Portfolio_Data/Certifications_Data";
import { FaLink } from "react-icons/fa";

function CertificateComponents() {
  return (
    <>
      <div className="text-white/90 relative overflow-x-auto">
        <table className="bg-gradient-to-tr from-blue-500/20 rounded-lg table-auto w-full border border-separate border-1 text-center">
          <thead className=" text-white rounded-t-lg">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Organization</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-2 py-2">Credentials</th>
            </tr>
          </thead>
          <tbody>
            {certifications.map((cert, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{cert.title}</td>
                <td className="border px-4 py-2">{cert.organization}</td>
                <td className="border px-4 py-2">{cert.date}</td>
                <td className="border px-4 py-2">
                  <a
                    href={cert.credential_url}
                    className="inline-block"
                    target="_blank"
                  >
                    <FaLink className="text-xl" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CertificateComponents;
