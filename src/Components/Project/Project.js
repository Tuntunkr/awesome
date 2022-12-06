import React from "react"
import { BsGlobe } from "react-icons/bs"
import { AiOutlineGithub } from "react-icons/ai"
import { FaTelegram } from "react-icons/fa"
import "./Project.css"


function Project() {
  return (
    <>
    <section className="container-fluid secSpacer">
        <div className="container">
      <div className="p-4">
        <div className="sm:grid sm:grid-cols-4 sm:gap-5">
          {/* left side */}
          <div className="sm:grid sm:grid-cols-4 sm:gap-5">
          {/* left side */}
          <aside class="w-64" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
              <ul class="space-y-2">
                <li>hello</li>
                <li>hay</li>
                <li>hy!!</li>
                <li>hbdshjaf</li>
                <li>sbfsldfh</li>
              </ul>
            </div>
          </aside>
          <div className="sm:col-span-3 text-lg font-normal">
            <h2 className="text-center font-semibold text-2xl decoration-0">
              Polkadot
            </h2>
            <h3 className="font-semibold text-3xl mb-5">What is Polkadot</h3>
            <div>
              <div className="flex flex-col">
                <img
                  src="/logo512.png"
                  alt=""
                  className="sm:w-[200px] w-[80px] sm:h-[200px] h-[80px]"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum iusto sit neque atque quae et. Veritatis suscipit
                  repudiandae aperiam? Autem suscipit voluptas saepe placeat
                  veritatis deleniti. Libero recusandae nihil nam optio nemo
                  voluptatum sequi temporibus. Autem neque suscipit voluptatum
                  dolor repellendus laboriosam animi dolorem minus odit, nihil
                  quae eum, minima ipsam nostrum maxime est laudantium eaque
                  mollitia natus. Deserunt, vero, dignissimos quibusdam quis
                  similique, dolorum corrupti consequuntur quos quisquam a esse
                  quas reprehenderit veniam aperiam? Laborum neque laudantium
                  voluptatem repellendus commodi rem excepturi atque autem quas
                  mollitia, in odio similique ratione modi eos recusandae magni
                  corrupti suscipit ipsa repudiandae? Dolores reiciendis
                  provident animi, velit nemo modi nam voluptatem adipisci?
                  Assumenda veniam culpa nisi, officia deleniti totam provident
                  obcaecati adipisci facere quidem accusamus autem voluptates
                  ducimus quod? Officiis error at ex rerum ipsam voluptate,
                  impedit necessitatibus velit dicta qui nihil reiciendis
                  quisquam doloribus eius quis, perferendis labore sapiente!
                  Odio, recusandae quae?
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <button className="flex items-center my-3 px-3 py-2 rounded-md bg-green-500 space-x-3 text-xl text-white">
                  <BsGlobe className="w-6 h-6" />
                  <span className="text-white">Website</span>
                </button>
                <FaTelegram className="w-6 h-6" />
                <AiOutlineGithub className="w-6 h-6" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-2xl my-2">Motivation</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti itaque molestias illo nam nihil dolore, deleniti natus
                at doloribus cupiditate eveniet voluptate facilis repudiandae
                reprehenderit quis eligendi, exercitationem a, eos vel fuga
                fugit assumenda consequatur officiis quos! Corporis atque minima
                iusto amet, enim mollitia. Quas unde adipisci perspiciatis dolor
                tempora magni atque illo excepturi obcaecati consequuntur,
                quaerat, dolorem molestias asperiores iure, consectetur numquam!
                Impedit quasi nobis necessitatibus hic vero repudiandae maxime
                expedita suscipit voluptatem assumenda enim sequi, quis, numquam
                iusto quisquam unde illo! Expedita delectus nisi quae,
                reiciendis ab perferendis rem incidunt pariatur error harum
                repudiandae dolorum, voluptatibus consequuntur deleniti?
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl my-2">How to Contribute</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                est sapiente, eligendi repudiandae inventore officiis voluptatem
                ducimus fugiat sint cumque. Aspernatur aut veniam nostrum
                recusandae illo vitae, commodi quam eum numquam voluptatibus
                aliquam ab repellat fugit odit! Distinctio ducimus rerum libero
                expedita sunt qui ad, facilis recusandae ex totam provident
                facere cupiditate doloremque quibusdam aperiam? Asperiores hic
                id sunt aut aperiam possimus harum dolores officiis, quidem,
                omnis consequatur adipisci. Adipisci magni quas recusandae
                fugiat deserunt similique. Sunt tempora quis totam!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl my-2">Sponsors</h3>
              <img src="/logo512.png" alt="" className="h-[120px] w-[120px]" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </section>
    </>
  )
}

export default Project
